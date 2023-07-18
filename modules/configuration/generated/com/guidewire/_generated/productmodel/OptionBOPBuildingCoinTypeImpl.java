package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBuildingCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPBuildingCoinTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPBuildingCoinType> implements productmodel.OptionBOPBuildingCoinType {
  public OptionBOPBuildingCoinTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBuildingCov getBOPBuildingCov() {
    return (productmodel.BOPBuildingCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBuildingCov getCoverage() {
    return (productmodel.BOPBuildingCov)getClause();
  }
  
  
}