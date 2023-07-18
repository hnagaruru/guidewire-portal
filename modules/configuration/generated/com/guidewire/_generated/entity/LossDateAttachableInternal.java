package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LossDateAttachable.eti;LossDateAttachable.eix;LossDateAttachable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LossDateAttachableInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.reinsurance.LossDateAttachablePublicMethods {
  /**
   * Gets the value of the AttachmentBasis field.
   * Defines how applicable reinsurance agreements are determined at the time of ceding premiums or recovering on losses.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AttachmentBasisType getAttachmentBasis();
  
  
  /**
   * Sets the value of the AttachmentBasis field.
   */
  public void setAttachmentBasis(typekey.AttachmentBasisType value);
  
  
  
}