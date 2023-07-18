package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDProduct.eti;APDProduct.eix;APDProduct.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDProductInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Description_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDescription_L10N_ARRAY(entity.APDProduct_Description_L10N element);
  
  
  /**
   * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToName_L10N_ARRAY(entity.APDProduct_Name_L10N element);
  
  
  /**
   * Adds the given element to the ProductLines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProductLines(entity.APDProductToLine element);
  
  
  /**
   * Gets the value of the Abbreviation field.
   * The abbreviation used to identify the line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAbbreviation();
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The code used within the product model to identify this product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the Currencies field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCurrencyHandling getCurrencies();
  
  
  /**
   * Gets the value of the DateInstalled field.
   * Date when product was last installed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateInstalled();
  
  
  /**
   * Gets the value of the DateUpdated field.
   * Date when product was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateUpdated();
  
  
  /**
   * Gets the value of the DefinitionSequence field.
   * Provides a generic sequence number for added definition objects to ensure a unique publicID for a product definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefinitionSequence();
  
  
  /**
   * Gets the value of the Description field.
   * A description of the product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Description_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProduct_Description_L10N[] getDescription_L10N_ARRAY();
  
  
  /**
   * Array association for partition Description_L10N_ARRAYByLanguage on array Description_L10N_ARRAY
   */
  public entity.APDProduct_Description_L10N getDescription_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the Name field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Name_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProduct_Name_L10N[] getName_L10N_ARRAY();
  
  
  /**
   * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
   */
  public entity.APDProduct_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ProductAccountType field.
   * Account type of product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProductAccountType getProductAccountType();
  
  
  /**
   * Gets the value of the ProductCode field.
   * The code of the actual product generated from this definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the ProductLines field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductToLine[] getProductLines();
  
  
  /**
   * Gets the value of the Coinsurance field.
   * Whether this product can be subject to coinsurance (and layered)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCoinsurance();
  
  
  /**
   * Gets the value of the Multiline field.
   * Whether this product is multi-line; default false (single line)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMultiline();
  
  
  /**
   * Gets the value of the Portal field.
   * Whether the product is available in the portal or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPortal();
  
  
  /**
   * Gets the value of the UsesLocationListView field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUsesLocationListView();
  
  
  /**
   * Gets the value of the WrittenByThirdParty field.
   * If true, this product is written by another insurance company (captured as an organisation)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWrittenByThirdParty();
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromDescription_L10N_ARRAY(entity.APDProduct_Description_L10N element);
  
  
  /**
   * Removes the given element from the Description_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDescription_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromName_L10N_ARRAY(entity.APDProduct_Name_L10N element);
  
  
  /**
   * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ProductLines array. This is achieved by marking the element for removal.
   */
  public void removeFromProductLines(entity.APDProductToLine element);
  
  
  /**
   * Removes the given element from the ProductLines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProductLines(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Abbreviation field.
   */
  public void setAbbreviation(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Coinsurance field.
   */
  public void setCoinsurance(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Currencies field.
   */
  public void setCurrencies(typekey.APDCurrencyHandling value);
  
  
  /**
   * Sets the value of the DateInstalled field.
   */
  public void setDateInstalled(java.util.Date value);
  
  
  /**
   * Sets the value of the DateUpdated field.
   */
  public void setDateUpdated(java.util.Date value);
  
  
  /**
   * Sets the value of the DefinitionSequence field.
   */
  public void setDefinitionSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Description_L10N_ARRAY field.
   */
  public void setDescription_L10N_ARRAY(entity.APDProduct_Description_L10N[] value);
  
  
  /**
   * Sets the value of the Multiline field.
   */
  public void setMultiline(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  public void setName_L10N_ARRAY(entity.APDProduct_Name_L10N[] value);
  
  
  /**
   * Sets the value of the Portal field.
   */
  public void setPortal(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ProductAccountType field.
   */
  public void setProductAccountType(typekey.ProductAccountType value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductLines field.
   */
  public void setProductLines(entity.APDProductToLine[] value);
  
  
  /**
   * Sets the value of the UsesLocationListView field.
   */
  public void setUsesLocationListView(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WrittenByThirdParty field.
   */
  public void setWrittenByThirdParty(java.lang.Boolean value);
  
  
  
}