package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDAttribute.eti;APDAttribute.eix;APDAttribute.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDAttributeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the ApdowningdropdownArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToApdowningdropdownArray(entity.Apdowningdropdown element);
  
  
  /**
   * Adds the given element to the Codes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCodes(entity.APDDropdownEntry element);
  
  
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N element);
  
  
  /**
   * Adds the given element to the Label_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N element);
  
  
  /**
   * Adds the given element to the Rules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRules(entity.APDAttributeRule element);
  
  
  /**
   * Gets the value of the ApdowningdropdownArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Apdowningdropdown[] getApdowningdropdownArray();
  
  
  /**
   * Gets the value of the Category field.
   * The category of this attribute
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCategory();
  
  
  /**
   * Gets the value of the Codes field.
   * The list of available drop down entries
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry[] getCodes();
  
  
  /**
   * Gets the value of the Description field.
   * The description of the field in the object model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDAttribute_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the DropDownType field.
   * The way this attribute will be implemented as a dropdown 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDropDownType getDropDownType();
  
  
  /**
   * Gets the value of the Label field.
   * The label for this field on the screen
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLabel();
  
  
  /**
   * Gets the value of the Label_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute_Label_L10N[] getLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition Label_L10N_ARRAYByLanguage on array Label_L10N_ARRAY
   */
  public entity.APDAttribute_Label_L10N getLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   * The name of the field in the object model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the OwningDropDown field.
   * The attribute that owns the list 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getOwningDropDown();
  
  
  public gw.pl.persistence.core.Key getOwningDropDownID();
  
  
  /**
   * Gets the value of the Rules field.
   * Rules that apply to this attribute
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttributeRule[] getRules();
  
  
  /**
   * Gets the value of the Sequence field.
   * The order in which the fields are displayed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDAttribute getSubtype();
  
  
  /**
   * Gets the value of the Type field.
   * The type of field 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDFieldType getType();
  
  
  /**
   * Gets the value of the Typelist field.
   * The name of the typelist that implements this attribute as a drop down (if relevant)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypelist();
  
  
  /**
   * Gets the value of the DoNotRegenerate field.
   * If set, this is a typelist whose content is being maintained outside of the product definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDoNotRegenerate();
  
  
  /**
   * Gets the value of the IsDropDownOwner field.
   * If set, this attribute is an owner of a dropdown list
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsDropDownOwner();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Identifies that this field is the location that provides the jurisdiction of the risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isJurisdiction();
  
  
  /**
   * Gets the value of the Scalable field.
   * If true, this attribute should be pro-rated on splits and changes to period width
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isScalable();
  
  
  /**
   * Gets the value of the SplitByRatingPeriods field.
   * If true, this attribute will have values defined by rating periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSplitByRatingPeriods();
  
  
  /**
   * Removes the given element from the ApdowningdropdownArray array. This is achieved by marking the element for removal.
   */
  public void removeFromApdowningdropdownArray(entity.Apdowningdropdown element);
  
  
  /**
   * Removes the given element from the ApdowningdropdownArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromApdowningdropdownArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Codes array. This is achieved by marking the element for removal.
   */
  public void removeFromCodes(entity.APDDropdownEntry element);
  
  
  /**
   * Removes the given element from the Codes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCodes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Label_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N element);
  
  
  /**
   * Removes the given element from the Label_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   */
  public void removeFromRules(entity.APDAttributeRule element);
  
  
  /**
   * Removes the given element from the Rules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRules(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ApdowningdropdownArray field.
   */
  public void setApdowningdropdownArray(entity.Apdowningdropdown[] value);
  
  
  /**
   * Sets the value of the Category field.
   */
  public void setCategory(java.lang.String value);
  
  
  /**
   * Sets the value of the Codes field.
   */
  public void setCodes(entity.APDDropdownEntry[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDAttribute_Description_L10N[] value);
  
  
  /**
   * Sets the value of the DoNotRegenerate field.
   */
  public void setDoNotRegenerate(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DropDownType field.
   */
  public void setDropDownType(typekey.APDDropDownType value);
  
  
  /**
   * Sets the value of the IsDropDownOwner field.
   */
  public void setIsDropDownOwner(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Label field.
   */
  public void setLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the Label_L10N_ARRAY field.
   */
  public void setLabel_L10N_ARRAY(entity.APDAttribute_Label_L10N[] value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the OwningDropDown field.
   */
  public void setOwningDropDown(entity.APDAttribute value);
  
  
  public void setOwningDropDownID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Rules field.
   */
  public void setRules(entity.APDAttributeRule[] value);
  
  
  /**
   * Sets the value of the Scalable field.
   */
  public void setScalable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SplitByRatingPeriods field.
   */
  public void setSplitByRatingPeriods(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDAttribute value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.APDFieldType value);
  
  
  /**
   * Sets the value of the Typelist field.
   */
  public void setTypelist(java.lang.String value);
  
  
  
}