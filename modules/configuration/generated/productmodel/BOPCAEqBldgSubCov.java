package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCAEqBldgSubCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCAEqBldgSubCov extends entity.BOPBuildingCov {
  protected BOPCAEqBldgSubCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPCAEqBldgSubCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPCAEqBldgSubCov");
  }
  
  public BOPCAEqBldgSubCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCAEqBldgSubCov");
  }
  
  public productmodel.OptionBOPCAEqBldgSubDedType getBOPCAEqBldgSubDedTerm() {
    return (productmodel.OptionBOPCAEqBldgSubDedType)getCovTerm("BOPCAEqBldgSubDed");
  }
  
  public productmodel.DirectBOPCAEqBldgSubLimType getBOPCAEqBldgSubLimTerm() {
    return (productmodel.DirectBOPCAEqBldgSubLimType)getCovTerm("BOPCAEqBldgSubLim");
  }
  
  public boolean getHasBOPCAEqBldgSubDedTerm() {
    return hasCovTerm("BOPCAEqBldgSubDed");
  }
  
  public boolean getHasBOPCAEqBldgSubLimTerm() {
    return hasCovTerm("BOPCAEqBldgSubLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCAEqBldgSubCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCAEqBldgSubCov>() {
      public productmodel.BOPCAEqBldgSubCov newEmptyInstance() {
        return new productmodel.BOPCAEqBldgSubCov();
      }
      
      
    });
  }
}