package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Address.eti;Address.eix;Address.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AddressInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.AddressAutofillableInternal, com.guidewire._generated.entity.AddressBookLinkableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.OverlapTableInternal, com.guidewire._generated.entity.ReferenceableInternal, com.guidewire._generated.entity.ObfuscatableInternal, com.guidewire.pc.domain.archiving.impl.ReferenceableInternalMethods, com.guidewire.pc.domain.contact.impl.AddressCoreExtMethods, com.guidewire.pl.domain.contact.AddressPublicMethods, com.guidewire.pl.domain.contact.impl.AddressInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, gw.api.domain.archiving.MergeableReferenceable, gw.api.obfuscation.Obfuscator {
  /**
   * Adds the given element to the Replaces array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToReplaces(entity.AddressReplacement element);
  
  
  /**
   * Gets the value of the AddressType field.
   * Type of this address record.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AddressType getAddressType();
  
  
  /**
   * Gets the value of the Description field.
   * Additional description of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the ExternalID field.
   * Application assigned ID used as ABUID when ABUID is null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExternalID();
  
  
  /**
   * Gets the value of the GeocodeStatus field.
   * Enum giving the status of the latitude and longitude data.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GeocodeStatus getGeocodeStatus();
  
  
  /**
   * Gets the value of the LastUpdateTime field.
   * Date and time of last update
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastUpdateTime();
  
  
  /**
   * Gets the value of the LinkedAddress field.
   * A potential link to a group of addresses
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LinkedAddress getLinkedAddress();
  
  
  public gw.pl.persistence.core.Key getLinkedAddressID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Replaces field.
   * The Addresses that this Address has replaced through merges
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AddressReplacement[] getReplaces();
  
  
  /**
   * Gets the value of the SpatialPoint field.
   * Latitude and longitude of this address, represented as an instance of SpatialPoint.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.database.spatial.SpatialPoint getSpatialPoint();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Address getSubtype();
  
  
  /**
   * Gets the value of the TemporaryLastUpdateTime field.
   * Temporary date and time of last update; will eventually be copied to the LastUpdateTime during commit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTemporaryLastUpdateTime();
  
  
  /**
   * Gets the value of the ValidUntil field.
   * Latest date that this address is valid.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidUntil();
  
  
  /**
   * Gets the value of the BatchGeocode field.
   * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBatchGeocode();
  
  
  /**
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   */
  public void removeFromReplaces(entity.AddressReplacement element);
  
  
  /**
   * Removes the given element from the Replaces array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromReplaces(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AddressType field.
   */
  public void setAddressType(typekey.AddressType value);
  
  
  /**
   * Sets the value of the BatchGeocode field.
   */
  public void setBatchGeocode(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the ExternalID field.
   */
  public void setExternalID(java.lang.String value);
  
  
  /**
   * Sets the value of the GeocodeStatus field.
   */
  public void setGeocodeStatus(typekey.GeocodeStatus value);
  
  
  /**
   * Sets the value of the LastUpdateTime field.
   */
  public void setLastUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the LinkedAddress field.
   */
  public void setLinkedAddress(entity.LinkedAddress value);
  
  
  public void setLinkedAddressID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Replaces field.
   */
  public void setReplaces(entity.AddressReplacement[] value);
  
  
  /**
   * Sets the value of the SpatialPoint field.
   */
  public void setSpatialPoint(gw.api.database.spatial.SpatialPoint value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Address value);
  
  
  /**
   * Sets the value of the TemporaryLastUpdateTime field.
   */
  public void setTemporaryLastUpdateTime(java.util.Date value);
  
  
  /**
   * Sets the value of the ValidUntil field.
   */
  public void setValidUntil(java.util.Date value);
  
  
  
}