"use client"
import { useState, useEffect, useCallback } from 'react';


export const [showSurveyResult, setShowSurveyResult] = useState(false);
export const [showSurvey, setShowSurvey] = useState(true);
export const [monthlyCost, setMonthlyCost] = useState("");
export const [debugValues, setDebugValues] = useState({rechnungen_1: 0, rechnungen_2: 0, mwst: 0, mitarbeiter: 0, total: "", monthly: ""});

