package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDAttributeRule.eti;APDAttributeRule.eix;APDAttributeRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDAttributeRuleInternal extends com.guidewire._generated.entity.APDRuleInternal {
  /**
   * Gets the value of the Attribute field.
   * The attribute to which this rule applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getAttribute();
  
  
  public gw.pl.persistence.core.Key getAttributeID();
  
  
  /**
   * Sets the value of the Attribute field.
   */
  public void setAttribute(entity.APDAttribute value);
  
  
  public void setAttributeID(gw.pl.persistence.core.Key value);
  
  
  
}