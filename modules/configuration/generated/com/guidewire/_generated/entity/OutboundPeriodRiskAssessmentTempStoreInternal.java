package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundPeriodRiskAssessmentTempStore.eti;OutboundPeriodRiskAssessmentTempStore.eix;OutboundPeriodRiskAssessmentTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundPeriodRiskAssessmentTempStoreInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Adds the given element to the InboundPeriodRiskAssessmentErrorTempStore array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInboundPeriodRiskAssessmentErrorTempStore(entity.InboundPeriodRiskAssessmentErrorTempStore element);
  
  
  /**
   * Adds the given element to the OutboundLocationRiskAssessmentTempStore array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Gets the value of the InboundPeriodRiskAssessmentErrorTempStore field.
   * request level errors encountered after OutboundLocationRiskAssessmentTempStores are sent to risk assessment service
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundPeriodRiskAssessmentErrorTempStore[] getInboundPeriodRiskAssessmentErrorTempStore();
  
  
  /**
   * Gets the value of the OutboundLocationRiskAssessmentTempStore field.
   * list of locations associated with a single policy period that are being assessed for risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundLocationRiskAssessmentTempStore[] getOutboundLocationRiskAssessmentTempStore();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * policy period associated with the risk assessment request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Removes the given element from the InboundPeriodRiskAssessmentErrorTempStore array. This is achieved by marking the element for removal.
   */
  public void removeFromInboundPeriodRiskAssessmentErrorTempStore(entity.InboundPeriodRiskAssessmentErrorTempStore element);
  
  
  /**
   * Removes the given element from the InboundPeriodRiskAssessmentErrorTempStore array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInboundPeriodRiskAssessmentErrorTempStore(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the OutboundLocationRiskAssessmentTempStore array. This is achieved by marking the element for removal.
   */
  public void removeFromOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Removes the given element from the OutboundLocationRiskAssessmentTempStore array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOutboundLocationRiskAssessmentTempStore(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the InboundPeriodRiskAssessmentErrorTempStore field.
   */
  public void setInboundPeriodRiskAssessmentErrorTempStore(entity.InboundPeriodRiskAssessmentErrorTempStore[] value);
  
  
  /**
   * Sets the value of the OutboundLocationRiskAssessmentTempStore field.
   */
  public void setOutboundLocationRiskAssessmentTempStore(entity.OutboundLocationRiskAssessmentTempStore[] value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  
}