package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GroupProducerCode.eti;GroupProducerCode.eix;GroupProducerCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GroupProducerCodeInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Group field.
   * The associated Group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup();
  
  
  public gw.pl.persistence.core.Key getGroupID();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  /**
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value);
  
  
  public void setGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  
}