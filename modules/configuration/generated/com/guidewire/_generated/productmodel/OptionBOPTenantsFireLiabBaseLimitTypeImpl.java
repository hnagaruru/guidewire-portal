package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPTenantFireCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPTenantsFireLiabBaseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPTenantsFireLiabBaseLimitType> implements productmodel.OptionBOPTenantsFireLiabBaseLimitType {
  public OptionBOPTenantsFireLiabBaseLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPTenantFireCov getBOPTenantFireCov() {
    return (productmodel.BOPTenantFireCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPTenantFireCov getCoverage() {
    return (productmodel.BOPTenantFireCov)getClause();
  }
  
  
}