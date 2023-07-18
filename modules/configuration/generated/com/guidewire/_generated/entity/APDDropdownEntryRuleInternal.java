package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDDropdownEntryRule.eti;APDDropdownEntryRule.eix;APDDropdownEntryRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDDropdownEntryRuleInternal extends com.guidewire._generated.entity.APDAttributeRuleInternal {
  /**
   * Gets the value of the DropdownEntry field.
   * The dropdown entry to which this rule applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getDropdownEntry();
  
  
  public gw.pl.persistence.core.Key getDropdownEntryID();
  
  
  /**
   * Sets the value of the DropdownEntry field.
   */
  public void setDropdownEntry(entity.APDDropdownEntry value);
  
  
  public void setDropdownEntryID(gw.pl.persistence.core.Key value);
  
  
  
}