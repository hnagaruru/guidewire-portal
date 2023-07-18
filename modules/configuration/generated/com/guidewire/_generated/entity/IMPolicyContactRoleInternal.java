package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMPolicyContactRole.eti;IMPolicyContactRole.eix;IMPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the InlandMarineLine field.
   * The Inland Marine policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InlandMarineLine getInlandMarineLine();
  
  
  public gw.pl.persistence.core.Key getInlandMarineLineID();
  
  
  /**
   * Sets the value of the InlandMarineLine field.
   */
  public void setInlandMarineLine(entity.InlandMarineLine value);
  
  
  public void setInlandMarineLineID(gw.pl.persistence.core.Key value);
  
  
  
}