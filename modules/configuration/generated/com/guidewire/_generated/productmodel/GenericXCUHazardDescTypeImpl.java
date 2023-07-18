package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeXCULocationHazard.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericXCUHazardDescTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericXCUHazardDescType {
  public GenericXCUHazardDescTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExludeXCULocationHazard getExclusion() {
    return (productmodel.ExludeXCULocationHazard)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExludeXCULocationHazard getExludeXCULocationHazard() {
    return (productmodel.ExludeXCULocationHazard)getClause();
  }
  
  
}