package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserProducerCode.eti;UserProducerCode.eix;UserProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserProducerCodeInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Gets the value of the Role field.
   * Security role granted to the user producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Role getRole();
  
  
  public gw.pl.persistence.core.Key getRoleID();
  
  
  /**
   * Gets the value of the User field.
   * The associated User.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Role field.
   */
  public void setRole(entity.Role value);
  
  
  public void setRoleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}