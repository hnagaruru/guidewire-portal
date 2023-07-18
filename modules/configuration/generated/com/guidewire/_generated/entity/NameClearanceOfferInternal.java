package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NameClearanceOffer.eti;NameClearanceOffer.eix;NameClearanceOffer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NameClearanceOfferInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.product.NameClearanceOfferPublicMethods {
  /**
   * Gets the value of the NameClearResult field.
   * Back reference to NameClearanceResult
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NameClearanceResult getNameClearResult();
  
  
  public gw.pl.persistence.core.Key getNameClearResultID();
  
  
  /**
   * Gets the value of the ProductSelection field.
   * ProductSelection.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProductSelection getProductSelection();
  
  
  public gw.pl.persistence.core.Key getProductSelectionID();
  
  
  /**
   * Sets the value of the NameClearResult field.
   */
  public void setNameClearResult(entity.NameClearanceResult value);
  
  
  public void setNameClearResultID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductSelection field.
   */
  public void setProductSelection(entity.ProductSelection value);
  
  
  public void setProductSelectionID(gw.pl.persistence.core.Key value);
  
  
  
}