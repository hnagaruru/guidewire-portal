package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPTaxCost.eti;BOPTaxCost.eix;BOPTaxCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPTaxCostInternal extends com.guidewire._generated.entity.BOPCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the TaxState field.
   * Jurisdiction tax that applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getTaxState();
  
  
  /**
   * Sets the value of the TaxState field.
   */
  public void setTaxState(typekey.Jurisdiction value);
  
  
  
}