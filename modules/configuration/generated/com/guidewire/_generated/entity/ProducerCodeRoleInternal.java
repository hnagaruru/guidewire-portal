package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProducerCodeRole.eti;ProducerCodeRole.eix;ProducerCodeRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProducerCodeRoleInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.product.ProducerCodeRolePublicMethods, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Gets the value of the Role field.
   * Security role granted to the producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Role getRole();
  
  
  public gw.pl.persistence.core.Key getRoleID();
  
  
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
  
  
  
}