package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPBuildingAdditions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPBuildingAdditionsLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPBuildingAdditionsLimitType> implements productmodel.OptionHOPBuildingAdditionsLimitType {
  public OptionHOPBuildingAdditionsLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPBuildingAdditions getCoverage() {
    return (productmodel.HOPBuildingAdditions)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPBuildingAdditions getHOPBuildingAdditions() {
    return (productmodel.HOPBuildingAdditions)getClause();
  }
  
  
}