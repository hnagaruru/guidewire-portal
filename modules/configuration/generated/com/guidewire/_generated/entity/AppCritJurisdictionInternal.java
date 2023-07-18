package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AppCritJurisdiction.eti;AppCritJurisdiction.eix;AppCritJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AppCritJurisdictionInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.RuleVersionDependentInternal, com.guidewire.bizrules.management.RuleVersionAwareInternal, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction in a rule availability criteria
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the UWRule field.
   * The associated rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWRule getUWRule();
  
  
  public gw.pl.persistence.core.Key getUWRuleID();
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the UWRule field.
   */
  public void setUWRule(entity.UWRule value);
  
  
  public void setUWRuleID(gw.pl.persistence.core.Key value);
  
  
  
}