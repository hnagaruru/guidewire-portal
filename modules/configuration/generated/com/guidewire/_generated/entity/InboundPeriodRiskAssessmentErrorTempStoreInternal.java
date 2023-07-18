package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundPeriodRiskAssessmentErrorTempStore.eti;InboundPeriodRiskAssessmentErrorTempStore.eix;InboundPeriodRiskAssessmentErrorTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundPeriodRiskAssessmentErrorTempStoreInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.InboundRiskAssessmentErrorTempStoreInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the OutboundPeriodRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundPeriodRiskAssessmentTempStore getOutboundPeriodRiskAssessmentTempStore();
  
  
  public gw.pl.persistence.core.Key getOutboundPeriodRiskAssessmentTempStoreID();
  
  
  /**
   * Sets the value of the OutboundPeriodRiskAssessmentTempStore field.
   */
  public void setOutboundPeriodRiskAssessmentTempStore(entity.OutboundPeriodRiskAssessmentTempStore value);
  
  
  public void setOutboundPeriodRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
  
}