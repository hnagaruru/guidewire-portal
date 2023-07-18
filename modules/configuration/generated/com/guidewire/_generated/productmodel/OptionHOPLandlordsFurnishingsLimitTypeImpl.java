package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLandlordsFurnishings.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPLandlordsFurnishingsLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPLandlordsFurnishingsLimitType> implements productmodel.OptionHOPLandlordsFurnishingsLimitType {
  public OptionHOPLandlordsFurnishingsLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPLandlordsFurnishings getCoverage() {
    return (productmodel.HOPLandlordsFurnishings)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPLandlordsFurnishings getHOPLandlordsFurnishings() {
    return (productmodel.HOPLandlordsFurnishings)getClause();
  }
  
  
}