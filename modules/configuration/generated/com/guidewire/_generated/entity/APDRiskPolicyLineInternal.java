package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskPolicyLine.eti;APDRiskPolicyLine.eix;APDRiskPolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskPolicyLineInternal extends com.guidewire._generated.entity.APDRiskCoverableInternal {
  /**
   * Gets the value of the APDEdition field.
   * The edition that provides the rules for this policy line (null means the base rules are used)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductLineEdition getAPDEdition();
  
  
  public gw.pl.persistence.core.Key getAPDEditionID();
  
  
  /**
   * Sets the value of the APDEdition field.
   */
  public void setAPDEdition(entity.APDProductLineEdition value);
  
  
  public void setAPDEditionID(gw.pl.persistence.core.Key value);
  
  
  
}