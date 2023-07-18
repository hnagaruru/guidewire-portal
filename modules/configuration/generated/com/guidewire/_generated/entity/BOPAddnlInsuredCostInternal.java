package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPAddnlInsuredCost.eti;BOPAddnlInsuredCost.eix;BOPAddnlInsuredCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPAddnlInsuredCostInternal extends com.guidewire._generated.entity.BOPGeneralPremiumInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the AdditionalInsured field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsured getAdditionalInsured();
  
  
  public gw.pl.persistence.core.Key getAdditionalInsuredID();
  
  
  /**
   * Sets the value of the AdditionalInsured field.
   */
  public void setAdditionalInsured(entity.PolicyAddlInsured value);
  
  
  public void setAdditionalInsuredID(gw.pl.persistence.core.Key value);
  
  
  
}