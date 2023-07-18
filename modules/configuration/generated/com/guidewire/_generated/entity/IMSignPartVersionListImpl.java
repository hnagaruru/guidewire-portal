package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignPart.eti;IMSignPart.eix;IMSignPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMSignPartVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMSignPartVersionList {
  public IMSignPartVersionListImpl(entity.IMSignPart base)  {
    super(base);
  }
  
  public IMSignPartVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMSignPart AsOf(java.util.Date date) {
    return (entity.IMSignPart)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSignPartCost> IMSignPartCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMSignPart.IMSIGNPARTCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSign> IMSignsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMSignPart.IMSIGNS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToIMSignPartCosts(entity.IMSignPartCost bean) {
    addToArray(entity.IMSignPart.IMSIGNPARTCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToIMSigns(entity.IMSign bean) {
    addToArray(entity.IMSignPart.IMSIGNS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSignPart> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMSignPartCostVersionList> getIMSignPartCosts() {
    return (java.util.List)getArray(entity.IMSignPart.IMSIGNPARTCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMSignVersionList> getIMSigns() {
    return (java.util.List)getArray(entity.IMSignPart.IMSIGNS_PROP.get());
  }
  
  
}