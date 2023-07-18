package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NameClearanceResult.eti;NameClearanceResult.eix;NameClearanceResult.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NameClearanceResultInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.product.NameClearanceResultPublicMethods {
  /**
   * Adds the given element to the Offers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOffers(entity.NameClearanceOffer element);
  
  
  /**
   * Gets the value of the Offers field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NameClearanceOffer[] getOffers();
  
  
  /**
   * Gets the value of the OtherProdsAvail field.
   * If true, a product not included in the ProductOffers is assumed to be available; if false then unavailable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOtherProdsAvail();
  
  
  /**
   * Removes the given element from the Offers array. This is achieved by marking the element for removal.
   */
  public void removeFromOffers(entity.NameClearanceOffer element);
  
  
  /**
   * Removes the given element from the Offers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOffers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Offers field.
   */
  public void setOffers(entity.NameClearanceOffer[] value);
  
  
  /**
   * Sets the value of the OtherProdsAvail field.
   */
  public void setOtherProdsAvail(java.lang.Boolean value);
  
  
  
}