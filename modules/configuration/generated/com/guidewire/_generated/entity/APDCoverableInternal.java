package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverable.eti;APDCoverable.eix;APDCoverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoverableInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the ApdcoverableparentArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToApdcoverableparentArray(entity.Apdcoverableparent element);
  
  
  /**
   * Adds the given element to the ChildrenLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N element);
  
  
  /**
   * Adds the given element to the ClauseCategories array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClauseCategories(entity.APDClauseCategory element);
  
  
  /**
   * Adds the given element to the Clauses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClauses(entity.APDClause element);
  
  
  /**
   * Adds the given element to the CoreFields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoreFields(entity.APDCoreAttribute element);
  
  
  /**
   * Adds the given element to the CostDefinitions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostDefinitions(entity.APDRiskCostDefinition element);
  
  
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N element);
  
  
  /**
   * Adds the given element to the ExposureLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N element);
  
  
  /**
   * Adds the given element to the Exposures array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExposures(entity.APDExposure element);
  
  
  /**
   * Adds the given element to the Fields array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFields(entity.APDField element);
  
  
  /**
   * Adds the given element to the MenuLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDCoverable_Name_L10N element);
  
  
  /**
   * Gets the value of the ApdcoverableparentArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Apdcoverableparent[] getApdcoverableparentArray();
  
  
  /**
   * Gets the value of the ChildrenLabel field.
   * The label given to the tab or reference to the child objects
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChildrenLabel();
  
  
  /**
   * Gets the value of the ChildrenLabel_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_ChildrenLabel_L10N[] getChildrenLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition ChildrenLabel_L10N_ARRAYByLanguage on array ChildrenLabel_L10N_ARRAY
   */
  public entity.APDCoverable_ChildrenLabel_L10N getChildrenLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ClauseCategories field.
   * The set of clause categories used by this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClauseCategory[] getClauseCategories();
  
  
  /**
   * Gets the value of the Clauses field.
   * All clauses relating to this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause[] getClauses();
  
  
  /**
   * Gets the value of the CoreFields field.
   * Standard PolicyCenter fields that may be referred to in rules
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoreAttribute[] getCoreFields();
  
  
  /**
   * Gets the value of the CostDefinitions field.
   * The definitions of costs that attach directly to this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCostDefinition[] getCostDefinitions();
  
  
  /**
   * Gets the value of the CoverableType field.
   * The type of coverable, such as property, liability, etc
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCoverableType getCoverableType();
  
  
  /**
   * Gets the value of the Description field.
   * A description of what the coverable is, e.g. a vehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDCoverable_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ExposureLabel field.
   * The label given to the tab or reference to the exposure objects
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureLabel();
  
  
  /**
   * Gets the value of the ExposureLabel_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_ExposureLabel_L10N[] getExposureLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition ExposureLabel_L10N_ARRAYByLanguage on array ExposureLabel_L10N_ARRAY
   */
  public entity.APDCoverable_ExposureLabel_L10N getExposureLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Exposures field.
   * The types of risk exposure for this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExposure[] getExposures();
  
  
  /**
   * Gets the value of the Fields field.
   * Fields available for this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDField[] getFields();
  
  
  /**
   * Gets the value of the MenuLabel field.
   * Line detail label or coverable list label used in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMenuLabel();
  
  
  /**
   * Gets the value of the MenuLabel_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_MenuLabel_L10N[] getMenuLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition MenuLabel_L10N_ARRAYByLanguage on array MenuLabel_L10N_ARRAY
   */
  public entity.APDCoverable_MenuLabel_L10N getMenuLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the line or type of coverable used in the UI as a title
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDCoverable_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Parent field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getParent();
  
  
  public gw.pl.persistence.core.Key getParentID();
  
  
  /**
   * Gets the value of the RiskLocation field.
   * Defines how the jurisdiction/location of this coverable risk is determined
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRiskLocationType getRiskLocation();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCoverable getSubtype();
  
  
  /**
   * Gets the value of the TypeName field.
   * The entity (or subtype for lines) used to persist this coverable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeName();
  
  
  /**
   * Gets the value of the HasChildren field.
   * Defines if this coverable can have child coverables.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasChildren();
  
  
  /**
   * Gets the value of the HasExposure field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasExposure();
  
  
  /**
   * Gets the value of the HasModifiers field.
   * Whether this coverable has modifiers
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHasModifiers();
  
  
  /**
   * Gets the value of the IsAutoNumbered field.
   * Defines if the coverable is automatically numbered (ignored for the line)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsAutoNumbered();
  
  
  /**
   * Gets the value of the SeparateBilling field.
   * If true, this coverable will create an individual debtors charge items for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling();
  
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this coverable will crate an individual debtors charge for cash allocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateCollection();
  
  
  /**
   * Gets the value of the WrittenByThirdParty field.
   * If true, this product is written by another insurance company (captured as an organisation)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWrittenByThirdParty();
  
  
  /**
   * Removes the given element from the ApdcoverableparentArray array. This is achieved by marking the element for removal.
   */
  public void removeFromApdcoverableparentArray(entity.Apdcoverableparent element);
  
  
  /**
   * Removes the given element from the ApdcoverableparentArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromApdcoverableparentArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ChildrenLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N element);
  
  
  /**
   * Removes the given element from the ChildrenLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromChildrenLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
   */
  public void removeFromClauseCategories(entity.APDClauseCategory element);
  
  
  /**
   * Removes the given element from the ClauseCategories array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClauseCategories(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
   */
  public void removeFromClauses(entity.APDClause element);
  
  
  /**
   * Removes the given element from the Clauses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClauses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
   */
  public void removeFromCoreFields(entity.APDCoreAttribute element);
  
  
  /**
   * Removes the given element from the CoreFields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoreFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   */
  public void removeFromCostDefinitions(entity.APDRiskCostDefinition element);
  
  
  /**
   * Removes the given element from the CostDefinitions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostDefinitions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ExposureLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N element);
  
  
  /**
   * Removes the given element from the ExposureLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposureLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   */
  public void removeFromExposures(entity.APDExposure element);
  
  
  /**
   * Removes the given element from the Exposures array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExposures(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   */
  public void removeFromFields(entity.APDField element);
  
  
  /**
   * Removes the given element from the Fields array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFields(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N element);
  
  
  /**
   * Removes the given element from the MenuLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMenuLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDCoverable_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ApdcoverableparentArray field.
   */
  public void setApdcoverableparentArray(entity.Apdcoverableparent[] value);
  
  
  /**
   * Sets the value of the ChildrenLabel field.
   */
  public void setChildrenLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the ChildrenLabel_L10N_ARRAY field.
   */
  public void setChildrenLabel_L10N_ARRAY(entity.APDCoverable_ChildrenLabel_L10N[] value);
  
  
  /**
   * Sets the value of the ClauseCategories field.
   */
  public void setClauseCategories(entity.APDClauseCategory[] value);
  
  
  /**
   * Sets the value of the Clauses field.
   */
  public void setClauses(entity.APDClause[] value);
  
  
  /**
   * Sets the value of the CoreFields field.
   */
  public void setCoreFields(entity.APDCoreAttribute[] value);
  
  
  /**
   * Sets the value of the CostDefinitions field.
   */
  public void setCostDefinitions(entity.APDRiskCostDefinition[] value);
  
  
  /**
   * Sets the value of the CoverableType field.
   */
  public void setCoverableType(typekey.APDCoverableType value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDCoverable_Description_L10N[] value);
  
  
  /**
   * Sets the value of the ExposureLabel field.
   */
  public void setExposureLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the ExposureLabel_L10N_ARRAY field.
   */
  public void setExposureLabel_L10N_ARRAY(entity.APDCoverable_ExposureLabel_L10N[] value);
  
  
  /**
   * Sets the value of the Exposures field.
   */
  public void setExposures(entity.APDExposure[] value);
  
  
  /**
   * Sets the value of the Fields field.
   */
  public void setFields(entity.APDField[] value);
  
  
  /**
   * Sets the value of the HasChildren field.
   */
  public void setHasChildren(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the HasExposure field.
   */
  public void setHasExposure(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the HasModifiers field.
   */
  public void setHasModifiers(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IsAutoNumbered field.
   */
  public void setIsAutoNumbered(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the MenuLabel field.
   */
  public void setMenuLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the MenuLabel_L10N_ARRAY field.
   */
  public void setMenuLabel_L10N_ARRAY(entity.APDCoverable_MenuLabel_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDCoverable_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Parent field.
   */
  public void setParent(entity.APDCoverable value);
  
  
  public void setParentID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskLocation field.
   */
  public void setRiskLocation(typekey.APDRiskLocationType value);
  
  
  /**
   * Sets the value of the SeparateBilling field.
   */
  public void setSeparateBilling(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SeparateCollection field.
   */
  public void setSeparateCollection(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDCoverable value);
  
  
  /**
   * Sets the value of the TypeName field.
   */
  public void setTypeName(java.lang.String value);
  
  
  /**
   * Sets the value of the WrittenByThirdParty field.
   */
  public void setWrittenByThirdParty(java.lang.Boolean value);
  
  
  
}