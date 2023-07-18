package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessOwnersLine.eti;BusinessOwnersLine.eix;BusinessOwnersLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BusinessOwnersLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocationContainer, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the BOPCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPCosts(entity.BOPCost element);
  
  
  /**
   * Adds the given element to the BOPLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPLineConditions(entity.BusinessOwnersCond element);
  
  
  /**
   * Adds the given element to the BOPLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPLineCoverages(entity.BusinessOwnersCov element);
  
  
  /**
   * Adds the given element to the BOPLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPLineExclusions(entity.BusinessOwnersExcl element);
  
  
  /**
   * Adds the given element to the BOPLocations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPLocations(entity.BOPLocation element);
  
  
  /**
   * Adds the given element to the BOPModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPModifiers(entity.BOPModifier element);
  
  
  /**
   * Adds the given element to the BOPScheduledEquipments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBOPScheduledEquipments(entity.BOPScheduledEquipment element);
  
  
  /**
   * Gets the value of the BOPCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCost[] getBOPCosts();
  
  
  /**
   * Gets the value of the BOPLineConditions field.
   * Line-level conditions for Business Owners.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersCond[] getBOPLineConditions();
  
  
  /**
   * Gets the value of the BOPLineCoverages field.
   * Line-level coverages for Business Owners.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersCov[] getBOPLineCoverages();
  
  
  /**
   * Gets the value of the BOPLineExclusions field.
   * Line-level exclusions for Business Owners.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersExcl[] getBOPLineExclusions();
  
  
  /**
   * Gets the value of the BOPLocations field.
   * Locations on this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocation[] getBOPLocations();
  
  
  /**
   * Gets the value of the BOPModifiers field.
   * Rating info for the line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPModifier[] getBOPModifiers();
  
  
  /**
   * Gets the value of the BOPScheduledEquipments field.
   * List of Scheduled Equipment for this policy line.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPScheduledEquipment[] getBOPScheduledEquipments();
  
  
  /**
   * Gets the value of the BlanketType field.
   * Blanket Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BlanketType getBlanketType();
  
  
  /**
   * Gets the value of the EquipmentAutoNumberSeq field.
   * Sequence to autonumber tools
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getEquipmentAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getEquipmentAutoNumberSeqID();
  
  
  /**
   * Gets the value of the SmallBusinessType field.
   * Small Business Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SmallBusinessType getSmallBusinessType();
  
  
  /**
   * Gets the value of the ViewBundledCoverages field.
   * Display or hide bundled coverages
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isViewBundledCoverages();
  
  
  /**
   * Removes the given element from the BOPCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPCosts(entity.BOPCost element);
  
  
  /**
   * Removes the given element from the BOPCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPLineConditions(entity.BusinessOwnersCond element);
  
  
  /**
   * Removes the given element from the BOPLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPLineCoverages(entity.BusinessOwnersCov element);
  
  
  /**
   * Removes the given element from the BOPLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPLineExclusions(entity.BusinessOwnersExcl element);
  
  
  /**
   * Removes the given element from the BOPLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPLocations array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPLocations(entity.BOPLocation element);
  
  
  /**
   * Removes the given element from the BOPLocations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPModifiers(entity.BOPModifier element);
  
  
  /**
   * Removes the given element from the BOPModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BOPScheduledEquipments array. This is achieved by marking the element for removal.
   */
  public void removeFromBOPScheduledEquipments(entity.BOPScheduledEquipment element);
  
  
  /**
   * Removes the given element from the BOPScheduledEquipments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBOPScheduledEquipments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BOPCosts field.
   */
  public void setBOPCosts(entity.BOPCost[] value);
  
  
  /**
   * Sets the value of the BOPLineConditions field.
   */
  public void setBOPLineConditions(entity.BusinessOwnersCond[] value);
  
  
  /**
   * Sets the value of the BOPLineCoverages field.
   */
  public void setBOPLineCoverages(entity.BusinessOwnersCov[] value);
  
  
  /**
   * Sets the value of the BOPLineExclusions field.
   */
  public void setBOPLineExclusions(entity.BusinessOwnersExcl[] value);
  
  
  /**
   * Sets the value of the BOPLocations field.
   */
  public void setBOPLocations(entity.BOPLocation[] value);
  
  
  /**
   * Sets the value of the BOPModifiers field.
   */
  public void setBOPModifiers(entity.BOPModifier[] value);
  
  
  /**
   * Sets the value of the BOPScheduledEquipments field.
   */
  public void setBOPScheduledEquipments(entity.BOPScheduledEquipment[] value);
  
  
  /**
   * Sets the value of the BlanketType field.
   */
  public void setBlanketType(typekey.BlanketType value);
  
  
  /**
   * Sets the value of the EquipmentAutoNumberSeq field.
   */
  public void setEquipmentAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setEquipmentAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SmallBusinessType field.
   */
  public void setSmallBusinessType(typekey.SmallBusinessType value);
  
  
  /**
   * Sets the value of the ViewBundledCoverages field.
   */
  public void setViewBundledCoverages(java.lang.Boolean value);
  
  
  
}