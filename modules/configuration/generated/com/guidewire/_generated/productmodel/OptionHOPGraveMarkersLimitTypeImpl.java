package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGraveMarkers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPGraveMarkersLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPGraveMarkersLimitType> implements productmodel.OptionHOPGraveMarkersLimitType {
  public OptionHOPGraveMarkersLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPGraveMarkers getCoverage() {
    return (productmodel.HOPGraveMarkers)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPGraveMarkers getHOPGraveMarkers() {
    return (productmodel.HOPGraveMarkers)getClause();
  }
  
  
}