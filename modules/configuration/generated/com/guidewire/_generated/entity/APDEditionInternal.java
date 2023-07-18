package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDEdition.eti;APDEdition.eix;APDEdition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDEditionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the EditionRules array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEditionRules(entity.APDRule element);
  
  
  /**
   * Gets the value of the EditionCode field.
   * The name or code given to the edition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEditionCode();
  
  
  /**
   * Gets the value of the EditionDescription field.
   * The description associated with this edition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEditionDescription();
  
  
  /**
   * Gets the value of the EditionRules field.
   * Rules associated with this edition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRule[] getEditionRules();
  
  
  /**
   * Gets the value of the EffectiveDate field.
   * The date this edition becomes available to select
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDEdition getSubtype();
  
  
  /**
   * Removes the given element from the EditionRules array. This is achieved by marking the element for removal.
   */
  public void removeFromEditionRules(entity.APDRule element);
  
  
  /**
   * Removes the given element from the EditionRules array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEditionRules(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EditionCode field.
   */
  public void setEditionCode(java.lang.String value);
  
  
  /**
   * Sets the value of the EditionDescription field.
   */
  public void setEditionDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EditionRules field.
   */
  public void setEditionRules(entity.APDRule[] value);
  
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDEdition value);
  
  
  
}