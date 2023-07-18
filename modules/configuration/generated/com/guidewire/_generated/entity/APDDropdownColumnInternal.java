package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDDropdownColumn.eti;APDDropdownColumn.eix;APDDropdownColumn.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDDropdownColumnInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDDropdownColumn_Name_L10N element);
  
  
  /**
   * Gets the value of the Name field.
   * The name that describes the value within a package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownColumn_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDDropdownColumn_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Sequence field.
   * The sequence the values are to be listed within a package
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDropdownColumn getSubtype();
  
  
  /**
   * Gets the value of the Term field.
   * The attribute for which this is the dropdown code column definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTerm getTerm();
  
  
  public gw.pl.persistence.core.Key getTermID();
  
  
  /**
   * Gets the value of the ValueType field.
   * The type of value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CovTermModelVal getValueType();
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDDropdownColumn_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDDropdownColumn_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDDropdownColumn value);
  
  
  /**
   * Sets the value of the Term field.
   */
  public void setTerm(entity.APDTerm value);
  
  
  public void setTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ValueType field.
   */
  public void setValueType(typekey.CovTermModelVal value);
  
  
  
}