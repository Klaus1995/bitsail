/*
 *     Licensed to the Apache Software Foundation (ASF) under one or more
 *     contributor license agreements.  See the NOTICE file distributed with
 *     this work for additional information regarding copyright ownership.
 *     The ASF licenses this file to You under the Apache License, Version 2.0
 *     (the "License"); you may not use this file except in compliance with
 *     the License.  You may obtain a copy of the License at
 *        http://www.apache.org/licenses/LICENSE-2.0
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */

package com.bytedance.bitsail.connector.clickhouse.error;

import com.bytedance.bitsail.common.exception.ErrorCode;

public enum ClickhouseErrorCode implements ErrorCode {

  REQUIRED_VALUE("Clickhouse-00", "The configuration file is lack of necessary options"),
  CONFIG_ERROR("Clickhouse-01", "The configuration has wrong option"),
  CONVERT_ERROR("Clickhouse-02", "Failed to convert clickhouse result to row");

  private final String code;

  private final String describe;

  ClickhouseErrorCode(String code, String describe) {
    this.code = code;
    this.describe = describe;
  }

  @Override
  public String getCode() {
    return code;
  }

  @Override
  public String getDescription() {
    return describe;
  }

  @Override
  public String toString() {
    return String.format("Code:[%s], Describe:[%s]", this.code,
        this.describe);
  }
}