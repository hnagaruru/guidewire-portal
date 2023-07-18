package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AddressReplacement.eti;AddressReplacement.eix;AddressReplacement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AddressReplacementInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.OverlapTableInternal, com.guidewire._generated.entity.ObfuscatableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.api.obfuscation.Obfuscator {
  /**
   * Gets the value of the MergedPublicID field.
   * The PublicID of the Address that was Merged into another
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMergedPublicID();
  
  
  /**
   * Gets the value of the ReplacementAddress field.
   * The Address that replaced the merged Address
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address getReplacementAddress();
  
  
  public gw.pl.persistence.core.Key getReplacementAddressID();
  
  
  /**
   * Sets the value of the MergedPublicID field.
   */
  public void setMergedPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the ReplacementAddress field.
   */
  public void setReplacementAddress(entity.Address value);
  
  
  public void setReplacementAddressID(gw.pl.persistence.core.Key value);
  
  
  
}