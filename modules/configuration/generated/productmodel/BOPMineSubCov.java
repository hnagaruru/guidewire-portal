package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMineSubCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMineSubCov extends entity.BOPBuildingCov {
  protected BOPMineSubCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMineSubCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMineSubCov");
  }
  
  public BOPMineSubCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMineSubCov");
  }
  
  public productmodel.DirectBOPMineSubLimType getBOPMineSubLimTerm() {
    return (productmodel.DirectBOPMineSubLimType)getCovTerm("BOPMineSubLim");
  }
  
  public boolean getHasBOPMineSubLimTerm() {
    return hasCovTerm("BOPMineSubLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMineSubCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMineSubCov>() {
      public productmodel.BOPMineSubCov newEmptyInstance() {
        return new productmodel.BOPMineSubCov();
      }
      
      
    });
  }
}