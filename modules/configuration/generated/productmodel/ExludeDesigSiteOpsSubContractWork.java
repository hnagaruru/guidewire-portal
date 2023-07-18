package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeDesigSiteOpsSubContractWork.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExludeDesigSiteOpsSubContractWork extends entity.GeneralLiabilityExcl {
  protected ExludeDesigSiteOpsSubContractWork()  {
    super((java.lang.Void)null);
  }
  
  public ExludeDesigSiteOpsSubContractWork(entity.PolicyPeriod branch)  {
    super(branch, "ExludeDesigSiteOpsSubContractWork");
  }
  
  public ExludeDesigSiteOpsSubContractWork(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExludeDesigSiteOpsSubContractWork");
  }
  
  public productmodel.GenericDesigSiteOpsDescriptionType getDesigSiteOpsDescriptionTerm() {
    return (productmodel.GenericDesigSiteOpsDescriptionType)getCovTerm("DesigSiteOpsDescription");
  }
  
  public productmodel.TypekeyDesignateSiteOpsType getDesignateSiteOpsTerm() {
    return (productmodel.TypekeyDesignateSiteOpsType)getCovTerm("DesignateSiteOps");
  }
  
  public boolean getHasDesigSiteOpsDescriptionTerm() {
    return hasCovTerm("DesigSiteOpsDescription");
  }
  
  public boolean getHasDesignateSiteOpsTerm() {
    return hasCovTerm("DesignateSiteOps");
  }
  
  static {
    com.guidewire._generated.productmodel.ExludeDesigSiteOpsSubContractWorkInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExludeDesigSiteOpsSubContractWork>() {
      public productmodel.ExludeDesigSiteOpsSubContractWork newEmptyInstance() {
        return new productmodel.ExludeDesigSiteOpsSubContractWork();
      }
      
      
    });
  }
}