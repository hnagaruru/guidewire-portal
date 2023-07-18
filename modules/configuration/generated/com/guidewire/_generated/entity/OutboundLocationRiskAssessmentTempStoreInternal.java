package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OutboundLocationRiskAssessmentTempStore.eti;OutboundLocationRiskAssessmentTempStore.eix;OutboundLocationRiskAssessmentTempStore.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OutboundLocationRiskAssessmentTempStoreInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.AddressAutofillableInternal, com.guidewire._generated.entity.ObfuscatableInternal, gw.api.obfuscation.Obfuscator {
  /**
   * Adds the given element to the InboundLocationRiskAssessmentErrorTempStore array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInboundLocationRiskAssessmentErrorTempStore(entity.InboundLocationRiskAssessmentErrorTempStore element);
  
  
  /**
   * Adds the given element to the InboundLocationRiskAssessmentTempStoreArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInboundLocationRiskAssessmentTempStoreArray(entity.InboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Adds the given element to the OutboundReinsurableRiskAssessmentTempStore array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOutboundReinsurableRiskAssessmentTempStore(entity.OutboundReinsurableRiskAssessmentTempStore element);
  
  
  /**
   * Gets the value of the InboundLocationRiskAssessmentErrorTempStore field.
   * errors encountered after OutboundLocationRiskAssessmentTempStore is sent to risk assessment service
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundLocationRiskAssessmentErrorTempStore[] getInboundLocationRiskAssessmentErrorTempStore();
  
  
  /**
   * Gets the value of the InboundLocationRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundLocationRiskAssessmentTempStore getInboundLocationRiskAssessmentTempStore();
  
  
  /**
   * Gets the value of the InboundLocationRiskAssessmentTempStoreArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InboundLocationRiskAssessmentTempStore[] getInboundLocationRiskAssessmentTempStoreArray();
  
  
  public gw.pl.persistence.core.Key getInboundLocationRiskAssessmentTempStoreID();
  
  
  /**
   * Gets the value of the OutboundPeriodRiskAssessmentTempStore field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundPeriodRiskAssessmentTempStore getOutboundPeriodRiskAssessmentTempStore();
  
  
  public gw.pl.persistence.core.Key getOutboundPeriodRiskAssessmentTempStoreID();
  
  
  /**
   * Gets the value of the OutboundReinsurableRiskAssessmentTempStore field.
   * Reinsurables of this outbound risk assessment temp store
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.OutboundReinsurableRiskAssessmentTempStore[] getOutboundReinsurableRiskAssessmentTempStore();
  
  
  /**
   * Gets the value of the PolicyLocation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation();
  
  
  public gw.pl.persistence.core.Key getPolicyLocationID();
  
  
  /**
   * Gets the value of the PolicyLocationName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLocationName();
  
  
  /**
   * Gets the value of the SpatialPoint field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPoint();
  
  
  /**
   * Removes the given element from the InboundLocationRiskAssessmentErrorTempStore array. This is achieved by marking the element for removal.
   */
  public void removeFromInboundLocationRiskAssessmentErrorTempStore(entity.InboundLocationRiskAssessmentErrorTempStore element);
  
  
  /**
   * Removes the given element from the InboundLocationRiskAssessmentErrorTempStore array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInboundLocationRiskAssessmentErrorTempStore(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the InboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
   */
  public void removeFromInboundLocationRiskAssessmentTempStoreArray(entity.InboundLocationRiskAssessmentTempStore element);
  
  
  /**
   * Removes the given element from the InboundLocationRiskAssessmentTempStoreArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInboundLocationRiskAssessmentTempStoreArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the OutboundReinsurableRiskAssessmentTempStore array. This is achieved by marking the element for removal.
   */
  public void removeFromOutboundReinsurableRiskAssessmentTempStore(entity.OutboundReinsurableRiskAssessmentTempStore element);
  
  
  /**
   * Removes the given element from the OutboundReinsurableRiskAssessmentTempStore array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOutboundReinsurableRiskAssessmentTempStore(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the InboundLocationRiskAssessmentErrorTempStore field.
   */
  public void setInboundLocationRiskAssessmentErrorTempStore(entity.InboundLocationRiskAssessmentErrorTempStore[] value);
  
  
  /**
   * Sets the value of the InboundLocationRiskAssessmentTempStore field.
   */
  public void setInboundLocationRiskAssessmentTempStore(entity.InboundLocationRiskAssessmentTempStore value);
  
  
  /**
   * Sets the value of the InboundLocationRiskAssessmentTempStoreArray field.
   */
  public void setInboundLocationRiskAssessmentTempStoreArray(entity.InboundLocationRiskAssessmentTempStore[] value);
  
  
  public void setInboundLocationRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OutboundPeriodRiskAssessmentTempStore field.
   */
  public void setOutboundPeriodRiskAssessmentTempStore(entity.OutboundPeriodRiskAssessmentTempStore value);
  
  
  public void setOutboundPeriodRiskAssessmentTempStoreID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OutboundReinsurableRiskAssessmentTempStore field.
   */
  public void setOutboundReinsurableRiskAssessmentTempStore(entity.OutboundReinsurableRiskAssessmentTempStore[] value);
  
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value);
  
  
  public void setPolicyLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLocationName field.
   */
  public void setPolicyLocationName(java.lang.String value);
  
  
  /**
   * Sets the value of the SpatialPoint field.
   */
  public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value);
  
  
  
}