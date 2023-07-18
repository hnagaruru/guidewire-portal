package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPolicyDivide.eti;PolicyPolicyDivide.eix;PolicyPolicyDivide.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyPolicyDivideInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the DividedPolicy field.
   * Pointer to the divided policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getDividedPolicy();
  
  
  public gw.pl.persistence.core.Key getDividedPolicyID();
  
  
  /**
   * Gets the value of the SourcePolicy field.
   * Pointer to the source policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getSourcePolicy();
  
  
  public gw.pl.persistence.core.Key getSourcePolicyID();
  
  
  /**
   * Sets the value of the DividedPolicy field.
   */
  public void setDividedPolicy(entity.Policy value);
  
  
  public void setDividedPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SourcePolicy field.
   */
  public void setSourcePolicy(entity.Policy value);
  
  
  public void setSourcePolicyID(gw.pl.persistence.core.Key value);
  
  
  
}