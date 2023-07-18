package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountContactRoleReplacement.eti;AccountContactRoleReplacement.eix;AccountContactRoleReplacement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountContactRoleReplacementInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the MergedPublicID field.
   * The PublicID of the AccountContactRole that was Merged into another
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMergedPublicID();
  
  
  /**
   * Gets the value of the ReplacementAccountContactRole field.
   * The AccountContactRole that replaced the merged AccountContactRole
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContactRole getReplacementAccountContactRole();
  
  
  public gw.pl.persistence.core.Key getReplacementAccountContactRoleID();
  
  
  /**
   * Sets the value of the MergedPublicID field.
   */
  public void setMergedPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the ReplacementAccountContactRole field.
   */
  public void setReplacementAccountContactRole(entity.AccountContactRole value);
  
  
  public void setReplacementAccountContactRoleID(gw.pl.persistence.core.Key value);
  
  
  
}