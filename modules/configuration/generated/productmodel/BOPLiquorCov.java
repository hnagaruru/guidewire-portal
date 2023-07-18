package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiquorCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPLiquorCov extends entity.BusinessOwnersCov {
  protected BOPLiquorCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPLiquorCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPLiquorCov");
  }
  
  public BOPLiquorCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPLiquorCov");
  }
  
  public productmodel.DirectBOPLiquorAggLimType getBOPLiquorAggLimTerm() {
    return (productmodel.DirectBOPLiquorAggLimType)getCovTerm("BOPLiquorAggLim");
  }
  
  public productmodel.DirectBOPLiquorCauseBILimType getBOPLiquorCauseBILimTerm() {
    return (productmodel.DirectBOPLiquorCauseBILimType)getCovTerm("BOPLiquorCauseBILim");
  }
  
  public productmodel.DirectBOPLiquorCauseLimType getBOPLiquorCauseLimTerm() {
    return (productmodel.DirectBOPLiquorCauseLimType)getCovTerm("BOPLiquorCauseLim");
  }
  
  public productmodel.DirectBOPLiquorCauseMSLimType getBOPLiquorCauseMSLimTerm() {
    return (productmodel.DirectBOPLiquorCauseMSLimType)getCovTerm("BOPLiquorCauseMSLim");
  }
  
  public productmodel.DirectBOPLiquorMSLimType getBOPLiquorMSLimTerm() {
    return (productmodel.DirectBOPLiquorMSLimType)getCovTerm("BOPLiquorMSLim");
  }
  
  public productmodel.DirectBOPLiquorPersonBILimType getBOPLiquorPersonBILimTerm() {
    return (productmodel.DirectBOPLiquorPersonBILimType)getCovTerm("BOPLiquorPersonBILim");
  }
  
  public productmodel.DirectBOPLiquorPersonLimType getBOPLiquorPersonLimTerm() {
    return (productmodel.DirectBOPLiquorPersonLimType)getCovTerm("BOPLiquorPersonLim");
  }
  
  public productmodel.DirectBOPLiquorPersonMSLimType getBOPLiquorPersonMSLimTerm() {
    return (productmodel.DirectBOPLiquorPersonMSLimType)getCovTerm("BOPLiquorPersonMSLim");
  }
  
  public productmodel.DirectBOPLiquorPersonPDLimType getBOPLiquorPersonPDLimTerm() {
    return (productmodel.DirectBOPLiquorPersonPDLimType)getCovTerm("BOPLiquorPersonPDLim");
  }
  
  public boolean getHasBOPLiquorAggLimTerm() {
    return hasCovTerm("BOPLiquorAggLim");
  }
  
  public boolean getHasBOPLiquorCauseBILimTerm() {
    return hasCovTerm("BOPLiquorCauseBILim");
  }
  
  public boolean getHasBOPLiquorCauseLimTerm() {
    return hasCovTerm("BOPLiquorCauseLim");
  }
  
  public boolean getHasBOPLiquorCauseMSLimTerm() {
    return hasCovTerm("BOPLiquorCauseMSLim");
  }
  
  public boolean getHasBOPLiquorMSLimTerm() {
    return hasCovTerm("BOPLiquorMSLim");
  }
  
  public boolean getHasBOPLiquorPersonBILimTerm() {
    return hasCovTerm("BOPLiquorPersonBILim");
  }
  
  public boolean getHasBOPLiquorPersonLimTerm() {
    return hasCovTerm("BOPLiquorPersonLim");
  }
  
  public boolean getHasBOPLiquorPersonMSLimTerm() {
    return hasCovTerm("BOPLiquorPersonMSLim");
  }
  
  public boolean getHasBOPLiquorPersonPDLimTerm() {
    return hasCovTerm("BOPLiquorPersonPDLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPLiquorCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPLiquorCov>() {
      public productmodel.BOPLiquorCov newEmptyInstance() {
        return new productmodel.BOPLiquorCov();
      }
      
      
    });
  }
}