package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContact.eti;WCLaborContact.eix;WCLaborContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCLaborContactVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCLaborContactVersionList {
  public WCLaborContactVersionListImpl(entity.WCLaborContact base)  {
    super(base);
  }
  
  public WCLaborContactVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCLaborContact AsOf(java.util.Date date) {
    return (entity.WCLaborContact)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCLaborContact.DETAILS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToDetails(entity.WCLaborContactDetail bean) {
    addToArray(entity.WCLaborContact.DETAILS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCLaborContact> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails() {
    return (java.util.List)getArray(entity.WCLaborContact.DETAILS_PROP.get());
  }
  
  
}