package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountProducerCode.eti;AccountProducerCode.eix;AccountProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountProducerCodeInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTPRODUCERCODEADDED_EVENT = "AccountProducerCodeAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTPRODUCERCODECHANGED_EVENT = "AccountProducerCodeChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String ACCOUNTPRODUCERCODEREMOVED_EVENT = "AccountProducerCodeRemoved";
  
  /**
   * Gets the value of the Account field.
   * The account on which this is a contact.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  
}