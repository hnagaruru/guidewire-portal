package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundReinsurableRiskAssessmentTempStore.eti;OutboundReinsurableRiskAssessmentTempStore.eix;OutboundReinsurableRiskAssessmentTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundReinsurableRiskAssessmentTempStoreInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the CoverageGroup field.
   * Coverage group type for reinsurance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICoverageGroupType getCoverageGroup();
  
  
  /**
   * Gets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore getOutboundLocationRiskAssessmentTempStore();
  
  
  public gw.pl.persistence.core.Key getOutboundLocationRiskAssessmentTempStoreID();
  
  
  /**
   * Gets the value of the TotalInsuredValue field.
   * Total insured value for reinsurance
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
   * Sets the value of the CoverageGroup field.
   */
  public void setCoverageGroup(typekey.RICoverageGroupType value);
  
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  public void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore value);
  
  
  public void setOutboundLocationRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
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