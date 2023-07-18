package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductSelection.eti;ProductSelection.eix;ProductSelection.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProductSelectionInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.product.ProductSelectionPublicMethods {
  /**
   * Gets the value of the MaxCreate field.
   * Maximum number of Submissions that can be created from this offer at once
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMaxCreate();
  
  
  /**
   * Gets the value of the NumToCreate field.
   * Number of Submissions to create from this offer at once
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumToCreate();
  
  
  /**
   * Gets the value of the ProductCode field.
   * What Product is being offered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the ProductSelectionReason field.
   * Reason for making the offer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProductSelectionReason getProductSelectionReason();
  
  
  /**
   * Gets the value of the ProductSelectionStatus field.
   * Status of the offer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProductSelectionStatus getProductSelectionStatus();
  
  
  /**
   * Sets the value of the MaxCreate field.
   */
  public void setMaxCreate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NumToCreate field.
   */
  public void setNumToCreate(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductSelectionReason field.
   */
  public void setProductSelectionReason(typekey.ProductSelectionReason value);
  
  
  /**
   * Sets the value of the ProductSelectionStatus field.
   */
  public void setProductSelectionStatus(typekey.ProductSelectionStatus value);
  
  
  
}