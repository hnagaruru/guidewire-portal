package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormAssociation.eti;FormAssociation.eix;FormAssociation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class FormAssociationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.FormAssociationVersionList {
  public FormAssociationVersionListImpl(entity.FormAssociation base)  {
    super(base);
  }
  
  public FormAssociationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.FormAssociation AsOf(java.util.Date date) {
    return (entity.FormAssociation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.FormAssociation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}