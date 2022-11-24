import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {UserRepository} from '../repositories';
import {User} from '../models';
import {Keys} from '../config/keys';

const generator=require('password-generator'),
    cipher=require('crypto-js'),
    jwt=require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AuthenticationService {
    constructor(
	@repository(UserRepository)
	public perRepository: UserRepository
    ) {}
    generator(){
	return generator(8, false);
    }
    cipherKey(key: string){
	return cipher.SHA256(key).toString();
    }
    identifyPer(user: string, key: string){
	try{
	    let consumer=this.perRepository.findOne({where: {email: user, key: key}});
	    if(consumer) return consumer;
	    return false;
	}
	catch{
	    return false;
	}
    }
    generateTokenJWT(user: User){
	return jwt.sign({
	    data: {
		id: user.id,
		email: user.email,
		name: `${user.names} ${user.surnames}`
	    }
	}, Keys.keyJWT)
    }
    checkTokenJWT(token: string){
	try{
	    return jwt.verify(token, Keys.keyJWT);
	}
	catch{
	    return false;
	}
    }
}
