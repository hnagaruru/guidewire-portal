package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigWrapUpOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigWrapUpOps extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigWrapUpOps()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigWrapUpOps(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigWrapUpOps");
  }
  
  public ExcludeDesigWrapUpOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigWrapUpOps");
  }
  
  public productmodel.GenericExcludedWrapUpOpsType getExcludedWrapUpOpsTerm() {
    return (productmodel.GenericExcludedWrapUpOpsType)getCovTerm("ExcludedWrapUpOps");
  }
  
  public boolean getHasExcludedWrapUpOpsTerm() {
    return hasCovTerm("ExcludedWrapUpOps");
  }
  
  public boolean getHasWrapUpLocTerm() {
    return hasCovTerm("WrapUpLoc");
  }
  
  public productmodel.GenericWrapUpLocType getWrapUpLocTerm() {
    return (productmodel.GenericWrapUpLocType)getCovTerm("WrapUpLoc");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigWrapUpOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigWrapUpOps>() {
      public productmodel.ExcludeDesigWrapUpOps newEmptyInstance() {
        return new productmodel.ExcludeDesigWrapUpOps();
      }
      
      
    });
  }
}