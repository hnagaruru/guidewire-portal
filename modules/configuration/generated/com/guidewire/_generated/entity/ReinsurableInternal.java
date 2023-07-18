package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Reinsurable.eti;Reinsurable.eix;Reinsurable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ReinsurableInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.reinsurance.ReinsurablePublicMethods, gw.api.reinsurance.ReinsurableAdapter {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Reinsurable getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CoverageGroup field.
   * The RI coverage group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICoverageGroupType getCoverageGroup();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Reinsurable getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ReinsuranceCurrency field.
   * Reinsurance Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getReinsuranceCurrency();
  
  
  /**
   * Gets the value of the RiskNumber field.
   * The risk number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Reinsurable getSubtype();
  
  
  /**
   * Gets the value of the TotalInsuredValue field.
   * Total insured value (property coverage) or sum insured (liability coverage) for the risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalInsuredValue();
  
  
  /**
   * Gets the value of the TotalInsuredValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalInsuredValue_amt();
  
  
  /**
   * Gets the value of the TotalInsuredValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalInsuredValue_cur();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.Reinsurable value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CoverageGroup field.
   */
  public void setCoverageGroup(typekey.RICoverageGroupType value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.Reinsurable value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReinsuranceCurrency field.
   */
  public void setReinsuranceCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Reinsurable value);
  
  
  /**
   * Sets the value of the TotalInsuredValue field.
   */
  public void setTotalInsuredValue(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalInsuredValue_amt field.
   */
  public void setTotalInsuredValue_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalInsuredValue_cur field.
   */
  public void setTotalInsuredValue_cur(typekey.Currency value);
  
  
  
}