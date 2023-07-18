package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeXCULocationHazard.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyXCULocOpsTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.DesignateSitesOps> implements productmodel.TypekeyXCULocOpsType {
  public TypekeyXCULocOpsTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
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