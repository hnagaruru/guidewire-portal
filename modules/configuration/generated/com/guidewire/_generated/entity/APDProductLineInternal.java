package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDProductLine.eti;APDProductLine.eix;APDProductLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDProductLineInternal extends com.guidewire._generated.entity.APDCoverableInternal {
  /**
   * Adds the given element to the Editions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToEditions(entity.APDProductLineEdition element);
  
  
  /**
   * Adds the given element to the Products array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToProducts(entity.APDProductToLine element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The code used within the product model to identify this line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the Currencies field.
   * The currencies used by this line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCurrencyHandling getCurrencies();
  
  
  /**
   * Gets the value of the DefinitionSequence field.
   * Provides a generic sequence number for added definition objects to ensure a unique publicID for an LOB definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefinitionSequence();
  
  
  /**
   * Gets the value of the Editions field.
   * The editions of this product line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductLineEdition[] getEditions();
  
  
  /**
   * Gets the value of the LinePrefix field.
   * The prefix uses for all objects that belong to this line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLinePrefix();
  
  
  /**
   * Gets the value of the ProductLineCode field.
   * The code of the actual product line generated from this definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductLineCode();
  
  
  /**
   * Gets the value of the Products field.
   * Link to the products that use this line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductToLine[] getProducts();
  
  
  /**
   * Removes the given element from the Editions array. This is achieved by marking the element for removal.
   */
  public void removeFromEditions(entity.APDProductLineEdition element);
  
  
  /**
   * Removes the given element from the Editions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromEditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   */
  public void removeFromProducts(entity.APDProductToLine element);
  
  
  /**
   * Removes the given element from the Products array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromProducts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the Currencies field.
   */
  public void setCurrencies(typekey.APDCurrencyHandling value);
  
  
  /**
   * Sets the value of the DefinitionSequence field.
   */
  public void setDefinitionSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Editions field.
   */
  public void setEditions(entity.APDProductLineEdition[] value);
  
  
  /**
   * Sets the value of the LinePrefix field.
   */
  public void setLinePrefix(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductLineCode field.
   */
  public void setProductLineCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Products field.
   */
  public void setProducts(entity.APDProductToLine[] value);
  
  
  
}