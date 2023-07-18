package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessAutoLine.eti;BusinessAutoLine.eix;BusinessAutoLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BusinessAutoLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, com.guidewire._generated.entity.CoverageSymbolGroupOwnerInternal, gw.api.domain.CoverableAdapter, gw.api.domain.CoverageSymbolGroupAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the BACosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBACosts(entity.BACost element);
  
  
  /**
   * Adds the given element to the BALineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineConditions(entity.BusinessAutoCond element);
  
  
  /**
   * Adds the given element to the BALineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineCoverages(entity.BusinessAutoCov element);
  
  
  /**
   * Adds the given element to the BALineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBALineExclusions(entity.BusinessAutoExcl element);
  
  
  /**
   * Adds the given element to the BAModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBAModifiers(entity.BAModifier element);
  
  
  /**
   * Adds the given element to the Drivers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDrivers(entity.CommercialDriver element);
  
  
  /**
   * Adds the given element to the Jurisdictions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJurisdictions(entity.BAJurisdiction element);
  
  
  /**
   * Adds the given element to the Vehicles array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToVehicles(entity.BusinessVehicle element);
  
  
  /**
   * Gets the value of the AutoSymbolsManualEditDate field.
   * Date when the selection of auto symbols was last manually edited
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAutoSymbolsManualEditDate();
  
  
  /**
   * Gets the value of the BACosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost[] getBACosts();
  
  
  /**
   * Gets the value of the BALineConditions field.
   * Line-level conditions for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoCond[] getBALineConditions();
  
  
  /**
   * Gets the value of the BALineCoverages field.
   * Line-level coverages for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoCov[] getBALineCoverages();
  
  
  /**
   * Gets the value of the BALineExclusions field.
   * Line-level exclusions for Commercial Auto.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoExcl[] getBALineExclusions();
  
  
  /**
   * Gets the value of the BAModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAModifier[] getBAModifiers();
  
  
  /**
   * Gets the value of the BusinessVehicleAutoNumberSeq field.
   * Sequence to autonumber vehicles
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getBusinessVehicleAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getBusinessVehicleAutoNumberSeqID();
  
  
  /**
   * Gets the value of the CustomAutoSymbolDesc field.
   * Description of custom covered auto symbol.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCustomAutoSymbolDesc();
  
  
  /**
   * Gets the value of the Drivers field.
   * Drivers on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialDriver[] getDrivers();
  
  
  /**
   * Gets the value of the Fleet field.
   * Vehicle fleet designation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FleetType getFleet();
  
  
  /**
   * Gets the value of the Jurisdictions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction[] getJurisdictions();
  
  
  /**
   * Gets the value of the PolicyType field.
   * Type of Commercial Auto policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BAPolicyType getPolicyType();
  
  
  /**
   * Gets the value of the Vehicles field.
   * Vehicles on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle[] getVehicles();
  
  
  /**
   * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
   */
  public void removeFromBACosts(entity.BACost element);
  
  
  /**
   * Removes the given element from the BACosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBACosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineConditions(entity.BusinessAutoCond element);
  
  
  /**
   * Removes the given element from the BALineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineCoverages(entity.BusinessAutoCov element);
  
  
  /**
   * Removes the given element from the BALineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromBALineExclusions(entity.BusinessAutoExcl element);
  
  
  /**
   * Removes the given element from the BALineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBALineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromBAModifiers(entity.BAModifier element);
  
  
  /**
   * Removes the given element from the BAModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBAModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   */
  public void removeFromDrivers(entity.CommercialDriver element);
  
  
  /**
   * Removes the given element from the Drivers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDrivers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   */
  public void removeFromJurisdictions(entity.BAJurisdiction element);
  
  
  /**
   * Removes the given element from the Jurisdictions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJurisdictions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   */
  public void removeFromVehicles(entity.BusinessVehicle element);
  
  
  /**
   * Removes the given element from the Vehicles array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromVehicles(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AutoSymbolsManualEditDate field.
   */
  public void setAutoSymbolsManualEditDate(java.util.Date value);
  
  
  /**
   * Sets the value of the BACosts field.
   */
  public void setBACosts(entity.BACost[] value);
  
  
  /**
   * Sets the value of the BALineConditions field.
   */
  public void setBALineConditions(entity.BusinessAutoCond[] value);
  
  
  /**
   * Sets the value of the BALineCoverages field.
   */
  public void setBALineCoverages(entity.BusinessAutoCov[] value);
  
  
  /**
   * Sets the value of the BALineExclusions field.
   */
  public void setBALineExclusions(entity.BusinessAutoExcl[] value);
  
  
  /**
   * Sets the value of the BAModifiers field.
   */
  public void setBAModifiers(entity.BAModifier[] value);
  
  
  /**
   * Sets the value of the BusinessVehicleAutoNumberSeq field.
   */
  public void setBusinessVehicleAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setBusinessVehicleAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CustomAutoSymbolDesc field.
   */
  public void setCustomAutoSymbolDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the Drivers field.
   */
  public void setDrivers(entity.CommercialDriver[] value);
  
  
  /**
   * Sets the value of the Fleet field.
   */
  public void setFleet(typekey.FleetType value);
  
  
  /**
   * Sets the value of the Jurisdictions field.
   */
  public void setJurisdictions(entity.BAJurisdiction[] value);
  
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(typekey.BAPolicyType value);
  
  
  /**
   * Sets the value of the Vehicles field.
   */
  public void setVehicles(entity.BusinessVehicle[] value);
  
  
  
}