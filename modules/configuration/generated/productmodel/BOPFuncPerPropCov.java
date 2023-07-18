package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFuncPerPropCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPFuncPerPropCov extends entity.BOPBuildingCov {
  protected BOPFuncPerPropCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPFuncPerPropCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPFuncPerPropCov");
  }
  
  public BOPFuncPerPropCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPFuncPerPropCov");
  }
  
  public productmodel.DirectBOPFuncPerPropLimType getBOPFuncPerPropLimTerm() {
    return (productmodel.DirectBOPFuncPerPropLimType)getCovTerm("BOPFuncPerPropLim");
  }
  
  public boolean getHasBOPFuncPerPropLimTerm() {
    return hasCovTerm("BOPFuncPerPropLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPFuncPerPropCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPFuncPerPropCov>() {
      public productmodel.BOPFuncPerPropCov newEmptyInstance() {
        return new productmodel.BOPFuncPerPropCov();
      }
      
      
    });
  }
}