package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InboundLocationRiskAssessmentTempStore.eti;InboundLocationRiskAssessmentTempStore.eix;InboundLocationRiskAssessmentTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InboundLocationRiskAssessmentTempStoreInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.RiskAssessmentResultInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore getOutboundLocationRiskAssessmentTempStore();
  
  
  public gw.pl.persistence.core.Key getOutboundLocationRiskAssessmentTempStoreID();
  
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  public void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore value);
  
  
  public void setOutboundLocationRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
  
}