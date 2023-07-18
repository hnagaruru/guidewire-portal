package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCFormAssociation.eti;WCFormAssociation.eix;WCFormAssociation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCFormAssociationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCFormAssociationVersionList {
  public WCFormAssociationVersionListImpl(entity.WCFormAssociation base)  {
    super(base);
  }
  
  public WCFormAssociationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCFormAssociation AsOf(java.util.Date date) {
    return (entity.WCFormAssociation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCFormAssociation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}