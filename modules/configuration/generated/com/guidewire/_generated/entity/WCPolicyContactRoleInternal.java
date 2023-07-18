package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCPolicyContactRole.eti;WCPolicyContactRole.eix;WCPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the WorkersCompLine field.
   * The workers comp policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine();
  
  
  public gw.pl.persistence.core.Key getWorkersCompLineID();
  
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value);
  
  
  public void setWorkersCompLineID(gw.pl.persistence.core.Key value);
  
  
  
}